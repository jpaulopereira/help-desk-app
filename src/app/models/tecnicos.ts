export interface Tecnico {
  id?: any;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  
  //declara um array de perfis
  perfis: string[];
 
  dataCriacao: any;
}
