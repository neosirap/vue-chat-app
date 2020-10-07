export default [
  { icon: 'mdi-email-outline', key: 'menu.email', text: 'Email', link: '/apps/email' },
  { icon: 'mdi-forum-outline', key: 'menu.chat', text: 'Chat', link: '/apps/chat' },
  { icon: 'mdi-format-list-checkbox', key: 'menu.todo', text: 'Todo', link: '/apps/todo' },
  { icon: 'mdi-view-column-outline', key: 'menu.board', text: 'Kanban Board', link: '/apps/board' },
  { icon: 'mdi-account-multiple-outline', key: 'menu.users', text: 'Users', regex: /^\/users/,
    items: [
      { key: 'menu.usersList', text: 'List', link: '/users/list' },
      { key: 'menu.usersEdit', text: 'Edit', link: '/users/edit' }
    ]
  }
]
