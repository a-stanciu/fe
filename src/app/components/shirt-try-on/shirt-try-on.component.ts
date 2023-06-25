import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shirt-try-on',
  templateUrl: './shirt-try-on.component.html',
  styleUrls: ['./shirt-try-on.component.scss'],
})
export class ShirtTryOnComponent {
  product: any;

  public webcamImage: WebcamImage = {} as WebcamImage;
  private trigger: Subject<void> = new Subject<void>();
  pictureTaken: boolean = false;
  wait: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.productService.get(id as number).subscribe((product) => {
      this.product = product;
    });
  }

  triggerSnapshot(): void {
    if (!this.pictureTaken) {
      this.wait = true;
      this.sleep(5000).then(() => {
        this.wait = false;
        this.pictureTaken = !this.pictureTaken;
        this.trigger.next();
      });
    } else {
      this.pictureTaken = !this.pictureTaken;
    }
  }

  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  sleep(milliseconds: number) {
    let resolve: any;
    let promise = new Promise((_resolve) => {
      resolve = _resolve;
    });
    setTimeout(() => resolve(), milliseconds);
    return promise;
  }

  getButtonName(): string {
    if (this.pictureTaken) {
      return 'Resetează';
    } else {
      if (this.wait) {
        return 'Pregătește-te...';
      } else {
        return 'Fă poza';
      }
    }
  }
}
