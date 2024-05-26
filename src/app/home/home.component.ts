import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  isDarkMode: boolean=false
  ngOnInit(): void {
     this.isDarkMode= Boolean(sessionStorage.getItem('darkMode')) || false;
     console.log(this.isDarkMode)


  }
  

  reviews = [
    {
      quote: "I was able to find a new job I love in just a few weeks in RevHire. Their platform made it easy to showcase my skills and experience to potential employers. I highly recommend it to anyone looking for a new career opportunity.",
      author: "John D.",
      position: "Web Developer",
      imageUrl: 'assets/review1.jpg',

    },
    {
      quote: "RevHire's AI matching technology helped me discover job opportunities I would have never found on my own. The recommendations were spot-on and tailored to my interests.",
      author: "Emily S.",
      position: "Marketing Manager",
      imageUrl: 'assets/review1.jpg',

    },
    {
      quote: "The user-friendly interface and real-time job alerts on RevHire made my job search process so much more efficient and streamlined. I highly recommend it to anyone looking for a new career opportunity.",
      author: "Michael T.",
      position: "Software Engineer",
      imageUrl: 'assets/review1.jpg', // Example image URL

    }
  ];

  currentIndex = 0;

  nextReview() {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
  }

  prevReview() {
    this.currentIndex = this.currentIndex === 0 ? this.reviews.length - 1 : this.currentIndex - 1;
  }
}
