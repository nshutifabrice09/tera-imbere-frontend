import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingPage implements OnInit {
  features = [
    {
      icon: 'shield',
      title: 'Bank-Grade Security',
      description: 'Multi-layer encryption and advanced fraud detection systems protect your financial data 24/7.'
    },
    {
      icon: 'users',
      title: 'Personal & Business Accounts',
      description: 'Seamlessly manage both personal finances and small business operations from one unified platform.'
    },
    {
      icon: 'layout',
      title: 'Intuitive Interface',
      description: 'Navigate your finances effortlessly with our streamlined, user-friendly dashboard designed for efficiency.'
    },
    {
      icon: 'clock',
      title: 'Real-Time Processing',
      description: 'Instant transaction updates and account synchronization keep you informed at every moment.'
    },
    {
      icon: 'chart',
      title: 'Financial Insights',
      description: 'Comprehensive analytics and reporting tools help you make informed financial decisions.'
    },
    {
      icon: 'globe',
      title: 'Always Accessible',
      description: 'Access your accounts anytime, anywhere with our responsive web and mobile platform.'
    }
  ];

  stats = [
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '256-bit', label: 'Encryption Standard' },
    { value: '24/7', label: 'Customer Support' },
    { value: '< 2s', label: 'Transaction Speed' }
  ];

  testimonials = [
    {
      quote: 'Tera Imbere transformed how we manage our small business finances. The dual account system is exactly what we needed.',
      author: 'Sarah Mitchell',
      role: 'Small Business Owner'
    },
    {
      quote: 'Finally, a banking platform that prioritizes both security and usability. I feel confident managing my finances here.',
      author: 'James Chen',
      role: 'Personal Banking Customer'
    },
    {
      quote: 'The real-time insights and reporting features have given us unprecedented visibility into our cash flow.',
      author: 'Patricia Rodriguez',
      role: 'Finance Manager'
    }
  ];

  currentYear = new Date().getFullYear();
  isMenuOpen = false;

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMenuOpen = false;
    }
  }

  getIconSvg(iconName: string): string {
    const icons: { [key: string]: string } = {
      shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      layout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
      clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
      chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>`,
      globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
    };
    return icons[iconName] || '';
  }
}