import { WebGLMultisampleRenderTarget } from './WebGLMultisampleRenderTarget.js';

class WebGLMultiviewRenderTarget extends WebGLMultisampleRenderTarget {

	constructor( width, height, numViews, options ) {
		super( width, height, options );

		this.depthBuffer = false;
		this.stencilBuffer = false;
	
		this.numViews = numViews;	
	}

	copy( source ) {
		super.copy.call( this, source );

		this.numViews = source.numViews;

		return this;

	}

	setNumViews ( numViews ) {

		if ( this.numViews !== numViews ) {

			this.numViews = numViews;
			this.dispose();

		}

		return this;

	}

}

WebGLMultiviewRenderTarget.prototype.isWebGLMultiviewRenderTarget = true

export { WebGLMultiviewRenderTarget };