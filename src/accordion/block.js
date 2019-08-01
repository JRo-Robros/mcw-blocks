//  Import CSS.
import './style.scss'
import './editor.scss'

const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.editor

const TEMPLATE = [
	['mcw-blocks/accordion-trigger', {}],
	['mcw-blocks/accordion-content', {}]
]

registerBlockType( 'mcw-blocks/accordion', {
	title: 'MCW Accordion',
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
					allowedBlocks={['mcw-blocks/accordion-content', 'mcw-blocks/accordion-trigger']}
				/>
			</div>
		)
	},

	save({ className }) {
		return (
			<div className={ className }>
				<InnerBlocks.Content />
			</div>
		)
	},
} )
