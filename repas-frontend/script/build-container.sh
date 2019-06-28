#! /bin/bash

# Construction du container du frontend
docker rmi repas/repas-frontend
docker build -f docker/Dockerfile --tag=repas/repas-frontend .
