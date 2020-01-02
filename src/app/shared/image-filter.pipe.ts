import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {

  transform(imageList: any[], criteria: any): any[] {
    if(criteria === 'all') { 
      return imageList; 
    } else {
      return imageList.filter(image => {
        return image.category === criteria;
      })
    }
  }

}
