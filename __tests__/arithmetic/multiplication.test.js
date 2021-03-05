const request = require('supertest');
const app = require('../../lib/app');

describe('/arithmetic/multiplication routes', () => {
  it('returns some easy multiplication problems', async() => {
    const { body: problems } = await request(app)
      .get('/api/v1/arithmetic/multiplication?number=5&difficulty=easy');

    expect(problems.length).toBe(5);

    const { 
      leftNumber, 
      rightNumber, 
      equation, 
      solution,
      operation,
      mml
    } = problems[0];

    expect(leftNumber).toEqual(expect.any(Number));
    expect(String(leftNumber).length).toBe(1);

    expect(rightNumber).toEqual(expect.any(Number));
    expect(String(rightNumber).length).toBe(1);

    expect(equation).toEqual(expect.any(String));

    expect(solution).toEqual(expect.any(Number));

    expect(operation).toEqual({ text: 'multiplication', symbol: '*' });

    expect(mml).toEqual(expect.any(String));
  });

  it('returns some medium multiplication problems', async() => {
    const { body: problems } = await request(app)
      .get('/api/v1/arithmetic/multiplication?number=5&difficulty=medium');

    expect(problems.length).toBe(5);

    const { 
      leftNumber, 
      rightNumber, 
      equation, 
      solution,
      operation,
      mml
    } = problems[0];

    expect(leftNumber).toEqual(expect.any(Number));
    expect(String(leftNumber).length).toBe(2);

    expect(rightNumber).toEqual(expect.any(Number));
    expect(String(rightNumber).length).toBe(2);

    expect(equation).toEqual(expect.any(String));

    expect(solution).toEqual(expect.any(Number));

    expect(operation).toEqual({ text: 'multiplication', symbol: '*' });

    expect(mml).toEqual(expect.any(String));
  });

  it('returns some hard multiplication problems', async() => {
    const { body: problems } = await request(app)
      .get('/api/v1/arithmetic/multiplication?number=5&difficulty=hard');

    expect(problems.length).toBe(5);

    const { 
      leftNumber, 
      rightNumber, 
      equation, 
      solution,
      operation,
      mml
    } = problems[0];

    expect(leftNumber).toEqual(expect.any(Number));
    expect(String(leftNumber).length).toBe(3);

    expect(rightNumber).toEqual(expect.any(Number));
    expect(String(rightNumber).length).toBe(3);

    expect(equation).toEqual(expect.any(String));

    expect(solution).toEqual(expect.any(Number));

    expect(operation).toEqual({ text: 'multiplication', symbol: '*' });

    expect(mml).toEqual(expect.any(String));
  });
});
