export interface Veiculo {
  id?: string,
  veiculo: string,
  marca: string,
  ano: string,
  descricao: string,
  cor: string,
  vendido: boolean,
  criado?: string | null,
  atualizado?:string | null
}

export interface VeiculoId {
  statusCode?: string;
  data: {
    id?: string,
    veiculo: string,
    marca: string,
    ano: string,
    descricao: string,
    cor: string,
    vendido: boolean,
    criado?: string | null,
    atualizado?:string | null;
  };
  timeStamp?: string;
}


export interface ResponseVeiculo {
  statusCode: number;
  data: {
      content: {
          id: number;
          veiculo: string;
          marca: string;
          ano: number;
          descricao: string;
          cor: string;
          vendido: boolean;
          criado: string;
          atualizado: string | null;
      }[];
      pageable: {
          pageNumber: number;
          pageSize: number;
          sort: {
              empty: boolean;
              unsorted: boolean;
              sorted: boolean;
          };
          offset: number;
          unpaged: boolean;
          paged: boolean;
      };
      last: boolean;
      totalPages: number;
      totalElements: number;
      first: boolean;
      size: number;
      number: number;
      sort: {
          empty: boolean;
          unsorted: boolean;
          sorted: boolean;
      };
      numberOfElements: number;
      empty: boolean;
  };
  timeStamp: number;
}



