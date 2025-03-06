import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  templateUrl: './typing-effect.component.html',
  styleUrls: ['./typing-effect.component.css']
})
export class TypingEffectComponent implements OnInit {
  @ViewChild('textElement', { static: true }) textElement!: ElementRef;
  words: string[] = ["Protection", "Security", "Company"];
  wordIndex: number = 0;
  letterIndex: number = 0;
  typingSpeed: number = 100;  // Typing speed
  erasingSpeed: number = 50;  // Erasing speed
  waitBeforeErase: number = 2000;
  waitBeforeNextWord: number = 500;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.typeWord();
  }

  typeWord() {
    if (this.letterIndex < this.words[this.wordIndex].length) {
      const text = this.words[this.wordIndex].substring(0, this.letterIndex + 1);
      this.renderer.setProperty(this.textElement.nativeElement, 'innerHTML', text);
      this.renderer.setStyle(this.textElement.nativeElement, 'color', '#0EC9AC');
      this.letterIndex++;
      setTimeout(() => this.typeWord(), this.typingSpeed);
    } else {
      setTimeout(() => this.eraseWord(), this.waitBeforeErase);
    }
  }

  eraseWord() {
    if (this.letterIndex > 0) {
      const text = this.words[this.wordIndex].substring(0, this.letterIndex - 1);
      this.renderer.setProperty(this.textElement.nativeElement, 'innerHTML', text);
      this.letterIndex--;
      setTimeout(() => this.eraseWord(), this.erasingSpeed);
    } else {
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      setTimeout(() => this.typeWord(), this.waitBeforeNextWord);
    }
  }
}
