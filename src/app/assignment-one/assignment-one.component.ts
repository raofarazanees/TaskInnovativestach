import { HttpClient } from '@angular/common/http';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-assignment-one',
  templateUrl: './assignment-one.component.html',
  styleUrl: './assignment-one.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AssignmentOneComponent {
  items: string[] = [];
  page = 1;
  isLoading = false;
  apiSubscription!: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadItems();
  }

  // Fetch items from API
  loadItems() {
    this.isLoading = true;
    this.apiSubscription = this.http.get<string[]>(`https://api?page=${this.page}`)
      .subscribe((data) => {
        this.items = [...this.items, ...data];
        this.isLoading = false;
      });
  }

  // Detect when user scrolls to the bottom and load next page
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.isLoading) {
      this.page++;
      this.loadItems();
    }
  }

  // Cleanup the API call when component is destroyed
  ngOnDestroy() {
    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }
}
