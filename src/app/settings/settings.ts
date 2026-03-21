import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankingService } from '../core/service/banking.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class SettingsComponent {
  constructor(public banking: BankingService) {}
}