type SchematicEventListener<E, V> = {
  name: E,
  callbacks: Array<(value: V) => void>
}

// interface SchematicsHandler {
//   listeners: SchematicEventListener,
//   trigger<V>(name: string, value: V): void
// }

interface SchematicsHandlerInterface<E, V> {
  trigger(name: E, value: V): void
  addEventListener(name: E, callback: (value: V) => void): void;
  removeEventListener(name: E, callback: (value: V) => void): void;
}

class SchematicsHandler<E, V> implements SchematicsHandlerInterface<E, V> {
  private listeners: SchematicEventListener<E, V>[] = [];

  private triggerCallbacks(listener: SchematicEventListener<E, V>, value: V): void {
    for(const callback of listener.callbacks) {
      callback(value)
    }
  }

  private hasListener(listenerName: E): number | null {
    const listenerIndex = this.listeners.findIndex((ls) => ls.name === listenerName)
    if (listenerIndex >= 0)
      return listenerIndex;
    return null
  }

  public trigger(name: E, value: V): void {
    const listener = this.hasListener(name);
    if (listener === null)
      throw new Error("Listener not found.");
    this.triggerCallbacks(this.listeners[listener], value)
  }

  public addEventListener(name: E, callback: (value: V) => void): void {
    const listener = this.hasListener(name);
    if (listener === null)
      return void this.listeners.push({ name, callbacks: [callback]})
    this.listeners[listener].callbacks.push(callback);
  }

  public removeEventListener(name: E, callback: (value: V) => void): void {
    const listener = this.hasListener(name);
    if (listener === null)
      throw new Error("Listener not found.");
    this.listeners[listener].callbacks = this.listeners[listener].callbacks.filter(c => c.name === callback.name)
  }
}


export default SchematicsHandler;
