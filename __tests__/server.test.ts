import request from 'supertest';
import app from "../src/server";

describe('Status in Routes', () => {

  test('/api', async () => {
    const response = await request(app).get('/api').send()
    expect(response.statusCode).toBe(200)
  })

  test('/api/hello',async () => {
    const response = await request(app).get('/api/hello').send()
    expect(response.statusCode).toBe(200)
  })

  test('/api/goodbye',async () => {
    const response = await request(app).get('/api/goodbye').send()
    expect(response.statusCode).toBe(200)
  })
  /*
    This Route Need DataBase Connection 
  */
  // test('/api/users',async () => {
  //   const response = await request(app).get('/api/users').send()
  //   expect(response.statusCode).toBe(500)
  // })
  /*
    This Route Need DataBase Connection 
  */
  // test('/api/katas',async () => {
  //   const response = await request(app).get('/api/katas').send()
  //   expect(response.statusCode).toBe(500)
  // })
})