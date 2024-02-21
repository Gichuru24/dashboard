import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  images = {
    pImage: '/assets/images/download.png',
  };

  sidebarItems = [
    {
      label: 'Dashboard',
      link: '/dashboard',
      iconPath: 'assets/icons/dashboard.svg',
    },
    {
      label: 'User Management',
      link: '/user-management',
      iconPath: 'assets/icons/user management.svg',
    },
    { label: 'ETR', link: '/etr', iconPath: 'assets/icons/etr.svg' },
    {
      label: 'Tax Payment',
      link: '/tax-payment',
      iconPath: 'assets/icons/tax payment.svg',
    },
    {
      label: 'Tax History',
      link: '/tax-history',
      iconPath: 'assets/icons/tax history.svg',
    },
    {
      label: 'Settings',
      link: '/settings',
      iconPath: 'assets/icons/setting.svg',
    },
    { label: 'Log Out', link: '/logout', iconPath: 'assets/icons/logout.svg' },
    // Add other items with their respective icon paths
  ];
  // sidebarItems = [
  //   {
  //     label: 'Dashboard',
  //     link: '/dashboard',
  //   },
  //   { label: 'User Management', link: '/user-management' },
  //   { label: 'ETR', link: '/etr' },
  //   { label: 'Tax Payment', link: '/tax-payment' },
  //   { label: 'Tax History', link: '/tax-history' },
  //   { label: 'Settings', link: '/settings' },
  //   { label: 'Log Out', link: '/logout' },
  // ];
  name: string = 'Username';
}
