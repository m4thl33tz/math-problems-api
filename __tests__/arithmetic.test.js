const request = require('supertest');
const app = require('../lib/app');

describe('Arithmetic Routes', () => {
  it('returns some addition problems', async() => {
    const { body: problems } = await request(app)
      .get('/api/v1/arithmetic/addition?number=5&difficulty=medium');

    expect(problems.length).toBe(5);

    const { 
      leftNumber, 
      rightNumber, 
      equation, 
      solution,
      operation
    } = problems[0];

    expect(leftNumber).toEqual(expect.any(Number));
    expect(String(leftNumber).length).toBe(2);

    expect(rightNumber).toEqual(expect.any(Number));
    expect(String(rightNumber).length).toBe(2);

    expect(equation).toEqual(expect.any(String));

    expect(solution).toEqual(expect.any(Number));

    expect(operation).toEqual({ text: 'addition', symbol: '+' });
  });
});
