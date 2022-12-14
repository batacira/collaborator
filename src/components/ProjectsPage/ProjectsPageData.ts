import { ProjectStatus } from '@components/ProjectCard/types';

export const projectList = [
    {
        id: 1,
        status: ProjectStatus.active,
        client: 'Some guy',
        lead: 'Kim Novak',
        manager: 'Milos Ilic',
        teamType: 'Dedicated',
        startDate: '01-01-2021',
        endDate: 'N/A',
    },
    {
        id: 2,
        status: ProjectStatus.cancelled,
        client: 'Batman',
        lead: 'Milos Ilic',
        manager: 'Milos Ilic',
        teamType: 'Backend',
        startDate: '04-01-2021',
        endDate: '14-01-2021',
    },
    {
        id: 3,
        status: ProjectStatus.inactive,
        client: 'Ash Williams',
        lead: 'Vuk Stojanovic',
        manager: 'Kim Novak',
        teamType: 'Frontend',
        startDate: '08-01-2021',
        endDate: '16-01-2021',
    },
    {
        id: 4,
        status: ProjectStatus.cancelled,
        client: 'Spiderman',
        lead: 'Bill Gates',
        manager: 'Sulla',
        teamType: 'Backend',
        startDate: '04-01-2021',
        endDate: '14-01-2021',
    },
    {
        id: 5,
        status: ProjectStatus.active,
        client: 'Mithradates',
        lead: 'Pontus',
        manager: 'Kim Novak',
        teamType: 'Frontend',
        startDate: '08-01-2021',
        endDate: '16-01-2021',
    },
];
