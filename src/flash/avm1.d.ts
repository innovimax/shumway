/**
 * Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import ASClass = Shumway.AVMX.AS.ASClass;

declare module Shumway.AVM1 {
  import flash = Shumway.AVMX.AS.flash;

  export class AVM1ActionsData {
  }
  export class AVM1Context {
    static create(loaderInfo: flash.display.LoaderInfo): AVM1Context;
    addAsset(className: string, symbolId: number, symbolProps): void;
    executeActions(actionsData: AVM1ActionsData, scopeObj): void;
    flushPendingScripts(): void;
    setStage(stage: flash.display.Stage): void;
    setRoot(stage: flash.display.DisplayObject, parameters: any): void;
  }
  export class AVM1Object {
  }
  export module Lib {
    function getAVM1Object(as3Object:flash.display.DisplayObject, context: AVM1Context): AVM1Object;
    function initializeAVM1Object(as3Object: flash.display.DisplayObject, context: AVM1Context,
                                  placeObjectTag: Shumway.SWF.PlaceObjectTag): void;
    class AVM1MovieClip extends AVM1Object {
      addFrameActionBlocks(frameIndex: number, frameData: any): void;
      addFrameScript(frameIndex: number, actionsBlock: Uint8Array): void;
    }
  }
}
