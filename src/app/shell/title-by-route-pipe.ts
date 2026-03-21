import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleByRoute',
  standalone: true
})
export class TitleByRoutePipe implements PipeTransform {
  transform(navItems: { label: string; route: string }[], url: string): string {
    return navItems.find(n => url.includes(n.route))?.label ?? 'Dashboard';
  }
}