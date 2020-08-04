const Cliente = require('../../models/cliente');

describe('Clientes', () => {
  beforeEach(() => {

  });

  it('Valida propriedades de um cliente', () => {
    const cliente = Cliente.novoCliente();
    expect(cliente.id).not.toBeUndefined();
    expect(cliente.nome).not.toBeUndefined();
    expect(cliente.telefone).not.toBeUndefined();
  });
  
  it('Retorna todos os clientes', () => {
    const clientes = Cliente.todos();
    expect(clientes.length).toEqual(10);
  });

  it('Retorna nome do cliente com inicial maiúscula', () => {
    const cliente = Cliente.novoCliente();
    cliente.nome = "felipe";
    expect(cliente.nomeMaiusculo()).toEqual("Felipe");
  });

});