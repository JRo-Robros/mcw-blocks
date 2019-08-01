//  Import CSS.
import './style.scss'
import './editor.scss'

const { registerBlockType, getBlockDefaultClassName } = wp.blocks
const { InnerBlocks, MediaUpload } = wp.editor

registerBlockType( 'mcw-blocks/parallax', {
	title: 'MCW Parallax',
	icon: 'sort',
	category: 'layout',
	attributes: {
		imgUrl: {
			type: 'string',
			default: 'http://fakeimg.pl/600x300/?text=Background Image'
	}
	},

	edit( props ) {
		const { className, setAttributes } = props;
		const { attributes } = props;

		function selectImage(value) {
			console.log(value);
			setAttributes({
					imgUrl: value.sizes.full.url,
			})
	}

		return (
			<div className={ className }>
			<h5>Parallax Section</h5>
				<MediaUpload
					onSelect={selectImage}
					render={ ({open}) => {
						return (
							<button onClick={open}>
								<img
									src={attributes.imgUrl}
								/>
							</button>
						);
					}}
				/>
				<InnerBlocks />
			</div>
		)
	},

	save( props ) {
		const className = getBlockDefaultClassName('mcw-blocks/parallax');
		const { attributes } = props;
		const cNames = `${className} parallax-container`

		return (
			<div className={ cNames }>
				<img className='parallax-bg' src={attributes.imgUrl}/>
				<div className='parallax-content'>
					<InnerBlocks.Content />
				</div>
			</div>
		)
	},
} )
