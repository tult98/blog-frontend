import { ITreeNode } from '~/components/widgets/Tree'

export const DASHBOARD_PREFIX = '/dashboard'
// sidebar item for dashboard

export const dashboardItems: ITreeNode[] = [
  {
    key: '0',
    label: 'Dashboard',
    icon: 'home',
    link: DASHBOARD_PREFIX,
  },
  {
    key: '1',
    label: 'Blog',
    children: [
      {
        key: '1-1',
        label: 'Categories',
        icon: 'folder',
        link: `${DASHBOARD_PREFIX}/categories`,
      },
      {
        key: '1-2',
        label: 'Tags',
        icon: 'tag',
        link: `${DASHBOARD_PREFIX}/tags`,
      },
      {
        key: '1-3',
        label: 'Articles',
        icon: 'document',
        link: `${DASHBOARD_PREFIX}/articles`,
      },
    ],
  },
]
