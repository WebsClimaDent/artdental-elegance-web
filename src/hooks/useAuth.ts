import { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    session: null,
    loading: true,
  });
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setAuthState({
          session,
          user: session?.user ?? null,
          loading: false,
        });
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthState({
        session,
        user: session?.user ?? null,
        loading: false,
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, fullName?: string) => {
    try {
      const redirectUrl = `${window.location.origin}/`;
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Error en el registro",
          description: error.message,
        });
        return { error };
      }

      toast({
        title: "Registro exitoso",
        description: "Por favor verifica tu email para activar tu cuenta.",
      });

      return { data, error: null };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido';
      toast({
        variant: "destructive",
        title: "Error en el registro",
        description: message,
      });
      return { error: { message } };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Error en el login",
          description: error.message,
        });
        return { error };
      }

      toast({
        title: "Login exitoso",
        description: "Bienvenido de vuelta!",
      });

      return { data, error: null };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido';
      toast({
        variant: "destructive",
        title: "Error en el login",
        description: message,
      });
      return { error: { message } };
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        toast({
          variant: "destructive",
          title: "Error al cerrar sesión",
          description: error.message,
        });
        return { error };
      }

      toast({
        title: "Sesión cerrada",
        description: "Has cerrado sesión exitosamente.",
      });

      return { error: null };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido';
      toast({
        variant: "destructive",
        title: "Error al cerrar sesión",
        description: message,
      });
      return { error: { message } };
    }
  };

  return {
    ...authState,
    signUp,
    signIn,
    signOut,
  };
};