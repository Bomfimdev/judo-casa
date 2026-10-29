export type Papel = 'admin' | 'sensei' | 'aluno' | 'responsavel';

export type Profile = {
  id: string;
  nome: string;
  papel: Papel;
  ativo: boolean;
  data_nascimento: string | null;
  codigo_vinculo: string | null;
  created_at: string;
  updated_at: string;
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Partial<Profile> & { id: string };
        Update: Partial<Profile>;
      };
      aluno_responsavel: {
        Row: {
          id: string;
          aluno_id: string;
          responsavel_id: string;
          status: 'pendente' | 'aprovado' | 'revogado';
          codigo_convite: string | null;
          created_at: string;
        };
        Insert: {
          aluno_id: string;
          responsavel_id: string;
          status?: 'pendente' | 'aprovado' | 'revogado';
          codigo_convite?: string | null;
        };
        Update: Partial<{
          status: 'pendente' | 'aprovado' | 'revogado';
          codigo_convite: string | null;
        }>;
      };
    };
  };
};
