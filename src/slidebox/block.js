//  Import CSS.
import './style.scss'
import './editor.scss'

const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.editor

const TEMPLATE = [
	['mcw-blocks/slidebox-img', {}],
	['mcw-blocks/slidebox-content', { placeholder: 'Slidebox Content' }]
]

registerBlockType( 'mcw-blocks/slidebox', {
	title: 'MCW Slidebox',
	icon: 'sort',
	category: 'layout',
	parent: ['mcw-blocks/slidebox-holder'],

	edit( { className } ) {

		return (
			<div className={ className }>
				<InnerBlocks
					template={ TEMPLATE }

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
