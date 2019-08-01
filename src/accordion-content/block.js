//  Import CSS.
import './style.scss'
import './editor.scss'

const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.editor

registerBlockType( 'mcw-blocks/accordion-content', {
	title: 'MCW Accordion Content',
	icon: 'arrow-down',
	category: 'layout',
	supports: {
		'align': true
	},
	parent: ['mcw-blocks/accordion'],

	edit({ className }) {

		return (
			<div className={ className }>
				<p><strong>Accordion Content</strong></p>
				<InnerBlocks />
			</div>
		)
	},

	save({ className }) {
		return (
			<div className={ className }>
				<div className='container'>
					<InnerBlocks.Content />
				</div>
			</div>
		)
	},
} )
