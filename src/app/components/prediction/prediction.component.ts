import { Component, OnInit, Input } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'prediction',
  templateUrl: './prediction.component.html'
})
export class PredictionComponent {
  @Input() data;
  inputValue: number;

  linearModel: tf.Sequential;
  prediction: any = 0.0;
  loaded: boolean = false;

  ngOnChanges() {
    this.train();
  }  

  async train(): Promise<any> {
    //Init loader
    this.loaded = false;

    //Define a model
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({units: 1, inputShape: [1]}));

    //Prepare model
    this.linearModel.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    //Training data    
    let preparedX = this.data.map(val => val.x);
    let preparedY = this.data.map(val => val.y);

    let xs = tf.tensor2d(preparedY, [this.data.length, 1]);
    let ys = tf.tensor2d(preparedX, [this.data.length, 1]);

    //Train
    await this.linearModel.fit(xs, ys, {epochs: 250});

    this.loaded = true;
  }

  predict() {
    let output = this.linearModel.predict(tf.tensor2d([this.inputValue], [1, 1])) as any;
    this.prediction = Array.from(output.dataSync())[0];
  }
}