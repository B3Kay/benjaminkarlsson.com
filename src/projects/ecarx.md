---
title: "Ecarx - Code Dependancy visualisation"
slug: "ecarx"
date: "2024-11-04"
description: "Built a tool to visualise code dependancies within AOSP and automtotive projects."
categories: ["React", "TailwindCSS", "Automotive", "postgreSQL", "Kubernetees", "Golang", "AOSP", "Gitlab", "Python", "Docker", ]
published: true
imageUrl: '/asset/portfolio/ecarx/dependancy_tree.png'
rating: 4.8
---

## Ecarx Project: Revolutionizing Automotive Technology

The Ecarx project is a tool to visualise code dependancies within AOSP and automotive projects. As a developer at Ecarx you're asked to take full responsibility of the code that you deliver. From commit to deployment, testing on physical rigs, in simulators and all the way to production.

To visualise the code dependancies I built a tool that visualises the code dependancies within AOSP and automotive projects. Including external test suites and components.

This tool is built on a Golang microservice architecture, with a React frontend.

It's integrated to Gitlab, getting building a dependancy tree based on the AOSP manifest and the git history. It's then integrated with external test suites and jira data. This is to track the code quality and the progress of the development.

The frontend is built with React, using Mantein UI, swr for data fetching, azure for single sign on, an internal REST api for the data tree and Gitlab for populating the commit and git specific data. 

## Aggregated Suites

In order to track the code quality and the progress of the development, the tool visualises the aggregated test suites.
This means from commit to customer.

- Commit
- Integration
- QA Activity on integration
- Delivery bundle
- Test suites
- Customer Integration
- Bug reporting

![Aggregated Suites](/asset/portfolio/ecarx/graph_aggregated_suites.png)
*Snapshot of the aggregated suites, visualized*

------

Bellow are some snapshots of the other features of the tool.

## Commit List
![Commit List](/asset/portfolio/ecarx/commit_list.png)
*Commit List*

## Manifest
![Componnt details](/asset/portfolio/ecarx/manifest_tree.png)
*Manifest tree*

## Dependancy - Big cards
![Componnt details](/asset/portfolio/ecarx/dependancy_big.png)
*Big Cards in Graph*

## Bundle Diff tool
![Compare Bundles](/asset/portfolio/ecarx/compare_bundles.png)
*Compare Bundles*

## Componnt details
![Componnt details](/asset/portfolio/ecarx/component_details.png)
*Componnt details*