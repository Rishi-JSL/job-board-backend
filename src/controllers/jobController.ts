import { Request, Response } from 'express';
import * as jobModel from '../models/jobModel';

export const createJob = async (req: Request, res: Response) => {
  try {
    const { title, company, location, salary, description } = req.body;
    const job = { title, company, location, salary, description };
    const result = await jobModel.createJob(job);
    res.status(201).json(result);
  } catch (err) {
    res.status(500);
  }
};

export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await jobModel.getJobs();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500);
  }
};

export const getJobById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const job = await jobModel.getJobById(id);
    if (job) {
      res.status(200).json(job);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (err) {
    res.status(500);
  }
};

export const updateJob = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { title, company, location, salary, description } = req.body;
    const job = { title, company, location, salary, description };
    const result = await jobModel.updateJob(id, job);
    res.status(200).json(result);
  } catch (err) {
    res.status(500);
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    await jobModel.deleteJob(id);
    res.status(204).send();
  } catch (err) {
    res.status(500);
  }
};
