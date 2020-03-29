import {Deserializable} from './deserializable.model';
import {Dataa} from './data';

export class Data implements Deserializable {
  data: Dataa;

  deserialize(input: any) {
    Object.assign(<any>this, input);
    // console.debug(input);
    // console.debug("mathben");
    // console.debug(this);
    return this;
  }
}
