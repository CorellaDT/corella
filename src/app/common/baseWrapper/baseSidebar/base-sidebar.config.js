import { v4 as uuid } from 'uuid';

const projectListButton = {
    id: uuid(),
    top: true,
    path: '/',
    route: 'project-list',
    label: 'Projects',
    icon: require('@/assets/images/icons/sidebar/icon-projects.svg')
}

const userManagementButton = {
    id: uuid(),
    top: true,
    path: '/admin/user-management',
    route: 'user-management',
    label: 'User Management',
    icon: require('@/assets/images/icons/sidebar/icon-user-managament.svg')
}

const menuTitle = {
    id: uuid(),
    type: 'TITLE',
    title: 'menu'
}

const boardButton = {
    id: uuid(),
    getPath: (context) => `/project/${context.$route.params.projectId}/board`,
    route: 'board',
    label: 'Board',
    icon: require('@/assets/images/icons/sidebar/icon-board.svg')
}

const projectSettingsButton = {
    id: uuid(),
    getPath: (context) => `/project/${context.$route.params.projectId}/settings`,
    route: 'project-settings',
    label: 'Settings',
    icon: require('@/assets/images/icons/common/icon-settings.svg')
}



const createTaskButton = {
    id: uuid(),
    label: 'Create New Task',
    icon: require('@/assets/images/icons/sidebar/icon-add.svg'),
    route: 'create-task',
    getPath: (context) => `/project/${context.$route.params.projectId}/create-task`
}

const createHotfixButton = {
    id: uuid(),
    label: 'Create New Hotfix',
    icon: require('@/assets/images/icons/common/icon-hotfix.svg'),
    // route: 'create-task',
    getPath: (context) => `/project/${context.$route.params.projectId}/create-task`
}

const bottomButton = new Map()
    .set('project-list', {
        id: uuid(),
        label: 'Create New Project',
        path: '/project/create'
    })
    .set('create-project', {
        id: uuid(),
        route: 'create-project',
        label: 'Create New Project',
        path: '/project/create'
    })
    .set('board', [
        createTaskButton,
        createHotfixButton
    ])
    .set('create-task', [
        createTaskButton,
        createHotfixButton
    ])

export const baseSidebarConfig = new Map()
    .set('default', [
        projectListButton,
        userManagementButton
    ])
    .set('project-list', [
        projectListButton,
        userManagementButton
    ])
    .set('board', [
        projectListButton,
        userManagementButton,
        menuTitle,
        boardButton,
        projectSettingsButton
    ])
    .set('project-settings', [
        projectListButton,
        userManagementButton,
        menuTitle,
        boardButton,
        projectSettingsButton
    ])
    .set('create-task', [
        projectListButton,
        userManagementButton,
        menuTitle,
        boardButton,
        projectSettingsButton
    ])
    .set('bottomButton', bottomButton)
