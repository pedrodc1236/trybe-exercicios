const service = require('./service');

 describe('Testes da função "randomNumber"', () => {
  it('Teste se a função randomNumber...', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })
 })