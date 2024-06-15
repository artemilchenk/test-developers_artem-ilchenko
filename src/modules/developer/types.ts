export interface IDeveloperFormData {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  photo: string;
}

export interface IDeveloperEntity {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  registration_timestamp: number;
  photo: string;
}

export interface IGetDevelopersResponse {
  count: number;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  page: number;
  success: boolean;
  total_pages: number;
  total_users: number;
  users: IDeveloperEntity[];
}
