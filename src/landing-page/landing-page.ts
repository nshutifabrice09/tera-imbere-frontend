import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingPage implements OnInit {
  
  // Core Banking Features
  bankingFeatures = [
    {
      icon: 'account',
      title: 'Personal Accounts',
      description: 'Open and manage personal checking and savings accounts with ease. Track your spending, set savings goals, and monitor your financial health.'
    },
    {
      icon: 'business',
      title: 'Small Business Banking',
      description: 'Tailored solutions for small businesses including business checking, merchant services, and financial management tools.'
    },
    {
      icon: 'transfer',
      title: 'Money Transfers',
      description: 'Send and receive money instantly. Support for local and international transfers with competitive exchange rates.'
    },
    {
      icon: 'mobile',
      title: 'Mobile Banking',
      description: 'Full-featured mobile app to access your accounts anytime, anywhere. Deposit checks, pay bills, and manage finances on the go.'
    }
  ];

  // Security Features
  securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All transactions and data are protected with bank-grade 256-bit encryption.',
      icon: 'lock'
    },
    {
      title: 'Two-Factor Authentication',
      description: 'Add an extra layer of security with SMS or app-based authentication.',
      icon: 'shield'
    },
    {
      title: 'Fraud Monitoring',
      description: 'Real-time fraud detection alerts you to suspicious activity instantly.',
      icon: 'alert'
    },
    {
      title: 'Secure Infrastructure',
      description: 'Built on Spring Boot with industry-standard security protocols and compliance.',
      icon: 'server'
    }
  ];

  // Account Management Features
  accountFeatures = [
    {
      title: 'Real-Time Balance Updates',
      description: 'See your account balance update instantly after every transaction.'
    },
    {
      title: 'Transaction History',
      description: 'Access complete transaction records with advanced search and filtering.'
    },
    {
      title: 'Statements & Reports',
      description: 'Download monthly statements and generate custom financial reports.'
    },
    {
      title: 'Bill Payments',
      description: 'Schedule one-time or recurring payments to vendors and utilities.'
    },
    {
      title: 'Account Alerts',
      description: 'Get notified about low balances, large transactions, and payment due dates.'
    },
    {
      title: 'Multiple Account Types',
      description: 'Manage checking, savings, and business accounts all in one place.'
    }
  ];

  // Statistics
  stats = [
    { value: '10K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
    { value: '<1s', label: 'Transaction Speed' }
  ];

  // Customer testimonials
  testimonials = [
    {
      name: 'David Mugisha',
      role: 'Small Business Owner',
      company: 'Tech Solutions Ltd',
      feedback: 'Tera Imbere has completely transformed how I manage my business finances. The ability to handle both personal and business accounts in one place is a game-changer.',
      rating: 5
    },
    {
      name: 'Grace Uwase',
      role: 'Freelance Consultant',
      company: 'Independent',
      feedback: 'The mobile app is incredibly user-friendly. I can deposit checks, transfer money, and pay bills right from my phone. Customer support is also excellent!',
      rating: 5
    },
    {
      name: 'Jean-Claude Niyonzima',
      role: 'Restaurant Owner',
      company: 'Umucyo Restaurant',
      feedback: 'Security was my biggest concern, but Tera Imbere has exceeded my expectations. The fraud detection caught a suspicious transaction before I even noticed it.',
      rating: 5
    }
  ];

  currentYear = new Date().getFullYear();
  isMenuOpen = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

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

  getIconSvg(iconName: string): SafeHtml {
    const icons: { [key: string]: string } = {
      account: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
      business: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
      transfer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`,
      mobile: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
      lock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
      shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      alert: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
      server: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`
    };
    return this.sanitizer.bypassSecurityTrustHtml(icons[iconName] || '');
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}