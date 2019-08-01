//  Import CSS.
import './style.scss'
import './editor.scss'

const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.editor

const TEMPLATE = [
	['mcw-blocks/slide', {}]
]

registerBlockType( 'mcw-blocks/slider', {
	title: 'MCW Slider',
	icon: 'sort',
	category: 'layout',
	supports: {
		'align': true
	},

	edit( { className } ) {

		return (
			<div className={ className }>
				<InnerBlocks
					template={ TEMPLATE }
					allowedBlocks={['mcw-blocks/slide']}
				/>
			</div>
		)
	},

	save({ className }) {
		return (
			<div className={ className }>
				<InnerBlocks.Content />
				<div className='slider-dots' ></div>
			</div>
		)
	},
} )
