export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ai_agents: {
        Row: {
          clinic_id: string | null
          created_at: string
          description: string | null
          id: string
          name: string | null
        }
        Insert: {
          clinic_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          clinic_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_agents_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      airtable_clients: {
        Row: {
          brand_color_1: string | null
          brand_color_2: string | null
          brand_color_3: string | null
          client_name: string
          created_at: string | null
          id: string
          logo_url: string | null
          updated_at: string | null
        }
        Insert: {
          brand_color_1?: string | null
          brand_color_2?: string | null
          brand_color_3?: string | null
          client_name: string
          created_at?: string | null
          id?: string
          logo_url?: string | null
          updated_at?: string | null
        }
        Update: {
          brand_color_1?: string | null
          brand_color_2?: string | null
          brand_color_3?: string | null
          client_name?: string
          created_at?: string | null
          id?: string
          logo_url?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      appointments: {
        Row: {
          assigned_employee_id: string | null
          contact_id: string
          created_at: string | null
          duration_minutes: number | null
          end_time: string | null
          google_event_id: string | null
          id: string
          notes: string | null
          start_time: string
          status: string
          title: string | null
          treatment_room_schedule_id: string | null
          updated_at: string | null
        }
        Insert: {
          assigned_employee_id?: string | null
          contact_id: string
          created_at?: string | null
          duration_minutes?: number | null
          end_time?: string | null
          google_event_id?: string | null
          id?: string
          notes?: string | null
          start_time: string
          status?: string
          title?: string | null
          treatment_room_schedule_id?: string | null
          updated_at?: string | null
        }
        Update: {
          assigned_employee_id?: string | null
          contact_id?: string
          created_at?: string | null
          duration_minutes?: number | null
          end_time?: string | null
          google_event_id?: string | null
          id?: string
          notes?: string | null
          start_time?: string
          status?: string
          title?: string | null
          treatment_room_schedule_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments 🎯_treatment_room_schedule_id_fkey"
            columns: ["treatment_room_schedule_id"]
            isOneToOne: false
            referencedRelation: "treatment_room_schedules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_assigned_employee_id_fkey"
            columns: ["assigned_employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      channels: {
        Row: {
          clinic_id: string | null
          color: string | null
          created_at: string | null
          created_by: string | null
          display_name: string
          icon: string | null
          id: string
          is_active: boolean | null
          sort_order: number | null
          updated_at: string | null
          value: Database["public"]["Enums"]["channel_value_enum"]
        }
        Insert: {
          clinic_id?: string | null
          color?: string | null
          created_at?: string | null
          created_by?: string | null
          display_name: string
          icon?: string | null
          id?: string
          is_active?: boolean | null
          sort_order?: number | null
          updated_at?: string | null
          value: Database["public"]["Enums"]["channel_value_enum"]
        }
        Update: {
          clinic_id?: string | null
          color?: string | null
          created_at?: string | null
          created_by?: string | null
          display_name?: string
          icon?: string | null
          id?: string
          is_active?: boolean | null
          sort_order?: number | null
          updated_at?: string | null
          value?: Database["public"]["Enums"]["channel_value_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "lead_origins_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_origins_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      climadent_contacts: {
        Row: {
          clinic_name: string | null
          created_at: string
          email: string | null
          id: string
          is_deleted: boolean | null
          last_name: string | null
          name: string | null
          phone: string | null
          status: string | null
          UTM_Channel: string | null
          web_contact_message: string | null
        }
        Insert: {
          clinic_name?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_deleted?: boolean | null
          last_name?: string | null
          name?: string | null
          phone?: string | null
          status?: string | null
          UTM_Channel?: string | null
          web_contact_message?: string | null
        }
        Update: {
          clinic_name?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_deleted?: boolean | null
          last_name?: string | null
          name?: string | null
          phone?: string | null
          status?: string | null
          UTM_Channel?: string | null
          web_contact_message?: string | null
        }
        Relationships: []
      }
      clinics: {
        Row: {
          address_latitude: number | null
          address_longitude: number | null
          branding_color_1: string | null
          branding_color_2: string | null
          branding_color_3: string | null
          city_address: string | null
          contact_email: string | null
          contact_phone: number | null
          created_at: string | null
          full_address: string | null
          google_calendar_account_id: string | null
          google_calendar_account_name: string | null
          id: string
          instagram_account_id: string | null
          instagram_account_name: string | null
          is_deleted: boolean | null
          name: string
          organization_id: string
          postal_code_address: number | null
          state_address: string | null
          updated_at: string | null
          url_image_1: string | null
          url_image_2: string | null
          url_image_3: string | null
          url_image_4: string | null
          url_image_5: string | null
          url_logo_image: string | null
          url_profile_image: string | null
          url_typography_1: string | null
          url_typography_2: string | null
          website: string | null
        }
        Insert: {
          address_latitude?: number | null
          address_longitude?: number | null
          branding_color_1?: string | null
          branding_color_2?: string | null
          branding_color_3?: string | null
          city_address?: string | null
          contact_email?: string | null
          contact_phone?: number | null
          created_at?: string | null
          full_address?: string | null
          google_calendar_account_id?: string | null
          google_calendar_account_name?: string | null
          id?: string
          instagram_account_id?: string | null
          instagram_account_name?: string | null
          is_deleted?: boolean | null
          name: string
          organization_id: string
          postal_code_address?: number | null
          state_address?: string | null
          updated_at?: string | null
          url_image_1?: string | null
          url_image_2?: string | null
          url_image_3?: string | null
          url_image_4?: string | null
          url_image_5?: string | null
          url_logo_image?: string | null
          url_profile_image?: string | null
          url_typography_1?: string | null
          url_typography_2?: string | null
          website?: string | null
        }
        Update: {
          address_latitude?: number | null
          address_longitude?: number | null
          branding_color_1?: string | null
          branding_color_2?: string | null
          branding_color_3?: string | null
          city_address?: string | null
          contact_email?: string | null
          contact_phone?: number | null
          created_at?: string | null
          full_address?: string | null
          google_calendar_account_id?: string | null
          google_calendar_account_name?: string | null
          id?: string
          instagram_account_id?: string | null
          instagram_account_name?: string | null
          is_deleted?: boolean | null
          name?: string
          organization_id?: string
          postal_code_address?: number | null
          state_address?: string | null
          updated_at?: string | null
          url_image_1?: string | null
          url_image_2?: string | null
          url_image_3?: string | null
          url_image_4?: string | null
          url_image_5?: string | null
          url_logo_image?: string | null
          url_profile_image?: string | null
          url_typography_1?: string | null
          url_typography_2?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clinic_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_list: {
        Row: {
          clinic_id: string | null
          created_at: string
          id: string
          name: string | null
        }
        Insert: {
          clinic_id?: string | null
          created_at?: string
          id?: string
          name?: string | null
        }
        Update: {
          clinic_id?: string | null
          created_at?: string
          id?: string
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_list_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          appointment_date: string | null
          campaign: string | null
          clinic_id: string | null
          contact_type: Database["public"]["Enums"]["contact_type"] | null
          created_at: string | null
          dob: string | null
          email: string | null
          id: string
          is_deleted: boolean
          last_name: string | null
          medical_history_summary: string | null
          name: string | null
          notes: string | null
          origin_channel_id: string | null
          phone: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          appointment_date?: string | null
          campaign?: string | null
          clinic_id?: string | null
          contact_type?: Database["public"]["Enums"]["contact_type"] | null
          created_at?: string | null
          dob?: string | null
          email?: string | null
          id?: string
          is_deleted?: boolean
          last_name?: string | null
          medical_history_summary?: string | null
          name?: string | null
          notes?: string | null
          origin_channel_id?: string | null
          phone?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          appointment_date?: string | null
          campaign?: string | null
          clinic_id?: string | null
          contact_type?: Database["public"]["Enums"]["contact_type"] | null
          created_at?: string | null
          dob?: string | null
          email?: string | null
          id?: string
          is_deleted?: boolean
          last_name?: string | null
          medical_history_summary?: string | null
          name?: string | null
          notes?: string | null
          origin_channel_id?: string | null
          phone?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contacts_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contacts_origin_channel_id_fkey"
            columns: ["origin_channel_id"]
            isOneToOne: false
            referencedRelation: "channels"
            referencedColumns: ["id"]
          },
        ]
      }
      employees: {
        Row: {
          birthday: string | null
          clinic_id: string | null
          created_at: string
          description: string | null
          email: string | null
          gender: string | null
          id: string
          image_1: string | null
          image_2: string | null
          image_3: string | null
          image_4: string | null
          image_5: string | null
          job_title: string | null
          last_name: string | null
          name: string | null
          phone: string | null
          professional_image: string | null
          role: Database["public"]["Enums"]["clinic_role"] | null
          tax_id: string | null
          user_profile_id: string | null
        }
        Insert: {
          birthday?: string | null
          clinic_id?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          gender?: string | null
          id?: string
          image_1?: string | null
          image_2?: string | null
          image_3?: string | null
          image_4?: string | null
          image_5?: string | null
          job_title?: string | null
          last_name?: string | null
          name?: string | null
          phone?: string | null
          professional_image?: string | null
          role?: Database["public"]["Enums"]["clinic_role"] | null
          tax_id?: string | null
          user_profile_id?: string | null
        }
        Update: {
          birthday?: string | null
          clinic_id?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          gender?: string | null
          id?: string
          image_1?: string | null
          image_2?: string | null
          image_3?: string | null
          image_4?: string | null
          image_5?: string | null
          job_title?: string | null
          last_name?: string | null
          name?: string | null
          phone?: string | null
          professional_image?: string | null
          role?: Database["public"]["Enums"]["clinic_role"] | null
          tax_id?: string | null
          user_profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employees_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_user_profile_id_fkey"
            columns: ["user_profile_id"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      marketing_events: {
        Row: {
          channel: string | null
          clinic_id: string | null
          copy: string | null
          created_at: string | null
          id: string
          media_url: string | null
          name: string | null
          post_type: string | null
          recipent: string | null
          status: string | null
          subject: string | null
          time: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          channel?: string | null
          clinic_id?: string | null
          copy?: string | null
          created_at?: string | null
          id?: string
          media_url?: string | null
          name?: string | null
          post_type?: string | null
          recipent?: string | null
          status?: string | null
          subject?: string | null
          time?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          channel?: string | null
          clinic_id?: string | null
          copy?: string | null
          created_at?: string | null
          id?: string
          media_url?: string | null
          name?: string | null
          post_type?: string | null
          recipent?: string | null
          status?: string | null
          subject?: string | null
          time?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketing_events_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketing_events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          billing_city: string | null
          billing_country: string | null
          billing_email: string | null
          billing_full_adress: string | null
          billing_postal_code: string | null
          billing_state: string | null
          company_name: string | null
          created_at: string
          id: string
          updated_at: string | null
          vat_number: string | null
        }
        Insert: {
          billing_city?: string | null
          billing_country?: string | null
          billing_email?: string | null
          billing_full_adress?: string | null
          billing_postal_code?: string | null
          billing_state?: string | null
          company_name?: string | null
          created_at?: string
          id?: string
          updated_at?: string | null
          vat_number?: string | null
        }
        Update: {
          billing_city?: string | null
          billing_country?: string | null
          billing_email?: string | null
          billing_full_adress?: string | null
          billing_postal_code?: string | null
          billing_state?: string | null
          company_name?: string | null
          created_at?: string
          id?: string
          updated_at?: string | null
          vat_number?: string | null
        }
        Relationships: []
      }
      treatment_room_schedules: {
        Row: {
          created_at: string
          day_of_week: number
          end_time: string
          id: string
          start_time: string
          treatment_room_id: string
        }
        Insert: {
          created_at?: string
          day_of_week: number
          end_time: string
          id?: string
          start_time: string
          treatment_room_id?: string
        }
        Update: {
          created_at?: string
          day_of_week?: number
          end_time?: string
          id?: string
          start_time?: string
          treatment_room_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "treatment_rooms_schedules_treatment_room_id_fkey"
            columns: ["treatment_room_id"]
            isOneToOne: false
            referencedRelation: "treatment_rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      treatment_rooms: {
        Row: {
          clinic_id: string | null
          created_at: string
          description: string | null
          google_calendar_id: string | null
          id: string
          is_active: boolean
          name: string | null
          treatment_room_number: number | null
          url_image_1: string | null
          url_image_2: string | null
          url_main_image: string | null
        }
        Insert: {
          clinic_id?: string | null
          created_at?: string
          description?: string | null
          google_calendar_id?: string | null
          id?: string
          is_active?: boolean
          name?: string | null
          treatment_room_number?: number | null
          url_image_1?: string | null
          url_image_2?: string | null
          url_main_image?: string | null
        }
        Update: {
          clinic_id?: string | null
          created_at?: string
          description?: string | null
          google_calendar_id?: string | null
          id?: string
          is_active?: boolean
          name?: string | null
          treatment_room_number?: number | null
          url_image_1?: string | null
          url_image_2?: string | null
          url_main_image?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "treatment_rooms_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      treatment_rooms_schedule_team: {
        Row: {
          ai_agent_id: string | null
          created_at: string
          employee_id: string | null
          id: string
          treatment_room_schedule_id: string | null
        }
        Insert: {
          ai_agent_id?: string | null
          created_at?: string
          employee_id?: string | null
          id?: string
          treatment_room_schedule_id?: string | null
        }
        Update: {
          ai_agent_id?: string | null
          created_at?: string
          employee_id?: string | null
          id?: string
          treatment_room_schedule_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "schedule_team_members_ai_agent_id_fkey"
            columns: ["ai_agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_team_members_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_team_members_treatment_room_schedule_id_fkey"
            columns: ["treatment_room_schedule_id"]
            isOneToOne: false
            referencedRelation: "treatment_room_schedules"
            referencedColumns: ["id"]
          },
        ]
      }
      user_organization_roles: {
        Row: {
          created_at: string | null
          organization_id: string
          role: Database["public"]["Enums"]["org_role"]
          user_profile_id: string
        }
        Insert: {
          created_at?: string | null
          organization_id: string
          role?: Database["public"]["Enums"]["org_role"]
          user_profile_id: string
        }
        Update: {
          created_at?: string | null
          organization_id?: string
          role?: Database["public"]["Enums"]["org_role"]
          user_profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_organization_roles_org_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_organization_roles_user_profile_id_fkey"
            columns: ["user_profile_id"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profile: {
        Row: {
          climadent_contact_id: string | null
          created_at: string | null
          email: string | null
          id: string
          invitation_accepted_at: string | null
          invitation_sent_at: string | null
          invitation_token: string | null
          is_active: boolean | null
          last_login_at: string | null
          last_name: string | null
          name: string | null
          onboarding_completed: boolean
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          climadent_contact_id?: string | null
          created_at?: string | null
          email?: string | null
          id: string
          invitation_accepted_at?: string | null
          invitation_sent_at?: string | null
          invitation_token?: string | null
          is_active?: boolean | null
          last_login_at?: string | null
          last_name?: string | null
          name?: string | null
          onboarding_completed?: boolean
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          climadent_contact_id?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          invitation_accepted_at?: string | null
          invitation_sent_at?: string | null
          invitation_token?: string | null
          is_active?: boolean | null
          last_login_at?: string | null
          last_name?: string | null
          name?: string | null
          onboarding_completed?: boolean
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_profile_climadent_contact_id_fkey"
            columns: ["climadent_contact_id"]
            isOneToOne: false
            referencedRelation: "climadent_contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      web_contacts: {
        Row: {
          clinic: string | null
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          status: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          clinic?: string | null
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          status?: string | null
          type?: string
          updated_at?: string | null
        }
        Update: {
          clinic?: string | null
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          status?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      clean_user_data_by_email: {
        Args: { user_email: string }
        Returns: undefined
      }
      create_default_channels_for_clinic: {
        Args: { clinic_id_param: string }
        Returns: undefined
      }
      is_platform_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      channel_value_enum:
        | "phone_placeholder"
        | "whatsapp_placeholder"
        | "email_placeholder"
        | "instagram_placeholder"
        | "facebook_placeholder"
        | "api_webhooks_placeholder"
        | "manual_placeholder"
      clinic_role: "admin" | "editor" | "viewer"
      contact_type: "lead" | "patient" | "old_patient" | "false_contact"
      lead_statuses:
        | "follow"
        | "new"
        | "contacted"
        | "booked"
        | "attended"
        | "non_interested"
      org_role: "owner" | "admin"
      user_role:
        | "platform_owner"
        | "platform_admin"
        | "organization_owner"
        | "organization_admin"
        | "staff"
        | "clinic_owner"
        | "clinic_admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      channel_value_enum: [
        "phone_placeholder",
        "whatsapp_placeholder",
        "email_placeholder",
        "instagram_placeholder",
        "facebook_placeholder",
        "api_webhooks_placeholder",
        "manual_placeholder",
      ],
      clinic_role: ["admin", "editor", "viewer"],
      contact_type: ["lead", "patient", "old_patient", "false_contact"],
      lead_statuses: [
        "follow",
        "new",
        "contacted",
        "booked",
        "attended",
        "non_interested",
      ],
      org_role: ["owner", "admin"],
      user_role: [
        "platform_owner",
        "platform_admin",
        "organization_owner",
        "organization_admin",
        "staff",
        "clinic_owner",
        "clinic_admin",
      ],
    },
  },
} as const
