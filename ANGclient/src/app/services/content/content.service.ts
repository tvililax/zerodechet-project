/*
Import & config
*/
  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
//


/*
Definition and export
*/
  export class ContentService {

    constructor() { }

    // Function to reduce file size
    public resizeImage = (base64Str, maxWidth, maxHeight) => {
      return new Promise((resolve) => {
        let img = new Image()
        img.src = base64Str
        img.onload = () => {
          let canvas = document.createElement('canvas')
          const MAX_WIDTH = maxWidth
          const MAX_HEIGHT = maxHeight
          let width = img.width
          let height = img.height

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width
              width = MAX_WIDTH
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height
              height = MAX_HEIGHT
            }
          }
          canvas.width = width
          canvas.height = height
          let ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, width, height)
          return resolve(canvas.toDataURL())
        }
      })
    }
  }
//