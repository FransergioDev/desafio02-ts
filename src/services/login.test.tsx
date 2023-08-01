import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    afterEach(() => {
        mockAlert.mockClear();
    });

    it('Deve exibir um alert com boas vindas', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo(a)!')
    })
    it('Deve exibir um alert com boas vindas com o nome passado por parametro', () => {
        const name = 'Fransérgio';
        login(name)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo(a) ${name}!`)
    })
})