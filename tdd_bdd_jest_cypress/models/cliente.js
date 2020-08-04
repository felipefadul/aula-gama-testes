module.exports = class Cliente {
  constructor(_id=0, _nome="Teste", _telefone="") {
    this.id = _id;
    this.nome = _nome;
    this.telefone = _telefone;
  }

  static novoCliente(_id=0, _nome="Teste", _telefone="") {
    return new Cliente(_id, _nome, _telefone);
  }

  static todos() {
    const clientes = [];
    for (let indice = 0; indice < 10; indice++)
      clientes.push(this.novoCliente(
        indice,
        `Usuário ${indice}`,
        indice === 0 ? '000000000' : `${indice*111111111}`)
      );
    return clientes;
  }

  nomeMaiusculo() {
    return this.nome.charAt(0).toUpperCase().concat(this.nome.slice(1));
  }
}