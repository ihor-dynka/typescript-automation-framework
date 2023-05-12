import Mocha from 'mocha'

export function it(name: string, test: Mocha.Func) {
    Mocha.it(name, test);
}