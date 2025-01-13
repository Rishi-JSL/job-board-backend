import connection from '../utils/db';

interface Job {
  id?: number;
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
}

export const createJob = (job: Job) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO jobs (title, company, location, salary, description) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [job.title, job.company, job.location, job.salary, job.description], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export const getJobs = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM jobs', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export const getJobById = (id: number) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM jobs WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export const updateJob = (id: number, job: Job) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE jobs SET title = ?, company = ?, location = ?, salary = ?, description = ? WHERE id = ?';
    connection.query(query, [job.title, job.company, job.location, job.salary, job.description, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export const deleteJob = (id: number) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM jobs WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};
