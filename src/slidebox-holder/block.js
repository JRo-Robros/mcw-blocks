//  Import CSS.
import './style.scss'
import './editor.scss'

const { registerBlockType } = wp.blocks
const { InnerBlocks } = wp.editor

const TEMPLATE = [
	['mcw-blocks/slidebox', {}],
	['mcw-blocks/slidebox', {}],
	['mcw-blocks/slidebox', {}]
]

registerBlockType( 'mcw-blocks/slidebox-holder', {
	title: 'MCW Slidebox Holder',
	icon: 'sort',
	category: 'layout',

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
