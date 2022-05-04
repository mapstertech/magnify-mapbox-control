class MagnifyTextControl {

    constructor(textLayers = [], magnificationFactor = 2) {
      this._textLayers = textLayers;
      this._magnificationFactor = magnificationFactor;
      this._isMagnified = false;
    }

    onAdd(map) {
      this._map = map;
      let that = this;

      this._btn = document.createElement("button");
      this._btn.className = "mapboxgl-ctrl-icon mapboxgl-ctrl-text-magnification";
      this._btn.type = "button";
      this._btn.innerHTML = "&#128269;"
      this._btn["aria-label"] = "Toggle Text Magnification";
      this._btn.onclick = function() {
        if(that._textLayers.length === 0) {
          const symbolLayers = map.getStyle().layers.filter(layer => layer.type === 'symbol');
          symbolLayers.forEach(layer => {
            if(layer.layout['text-size']) {
              const textSizeExpression = layer.layout['text-size'];
              let newExpression = that.recursiveMagnificationLoop(textSizeExpression);
              map.setLayoutProperty(layer.id, 'text-size', newExpression);
            }
          })
        }
        that._isMagnified = !that._isMagnified;
      };

      this._container = document.createElement("div");
      this._container.className = "mapboxgl-ctrl-group mapboxgl-ctrl";
      this._container.appendChild(this._btn);

      return this._container;
    }

    recursiveMagnificationLoop(expressionPart) {
      let newExpressionPart = JSON.parse(JSON.stringify(expressionPart));
      if(Array.isArray(expressionPart)) {
        if(expressionPart.indexOf('cubic-bezier') === -1) {
          for(let i=0; i < expressionPart.length; i++) {
            newExpressionPart[i] = this.recursiveMagnificationLoop(expressionPart[i]);
          }
        }
      } else {
        if(isNaN(expressionPart)) {
          return expressionPart;
        } else {
          if(this._isMagnified) {
            return expressionPart / this._magnificationFactor;
          } else {
            return expressionPart * this._magnificationFactor;
          }
        }
      }
      return newExpressionPart
    }

    onRemove() {
      this._container.parentNode.removeChild(this._container);
      this._map = undefined;
    }
}
