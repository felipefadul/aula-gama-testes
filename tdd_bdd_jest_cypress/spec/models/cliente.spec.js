const Cliente = require('../../models/cliente');

describe('Clientes', () => {
  beforeEach(() => {

  });

  test('Valida propriedades de um cliente', () => {
    const cliente = Cliente.novoCliente();
    expect(cliente.id).not.toBeUndefined();
    expect(cliente.nome).not.toBeUndefined();
    expect(cliente.telefone).not.toBeUndefined();
  });
  
  test('Retorna todos os clientes', () => {
    const clientes = Cliente.todos();
    expect(clientes.length).toEqual(10);
  });

  test('Retorna nome do cliente com inicial maiúscula', () => {
    const cliente = Cliente.novoCliente();
    cliente.nome = "felipe";
    expect(cliente.nomeMaiusculo()).toEqual("Felipe");
  });

  test('Nome testado com indexOf', () => {
    const cliente = Cliente.novoCliente();
    cliente.nome = "felipe";
    expect(cliente.nome.indexOf("f") != -1).toEqual(true);
  });

});