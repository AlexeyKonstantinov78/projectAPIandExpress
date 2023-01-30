import 'reflect-metadata';

function Test(
  key: string
) {
  return (target: Function) => {
    Reflect.defineMetadata(key, 1, target);
    const meta = Reflect.getMetadata(key, target);
    console.log(meta);
  }
}

function Prop(target: Object, name: string) {
  
}

@Test('C')
export class C {
  @Prop prop: number;
}