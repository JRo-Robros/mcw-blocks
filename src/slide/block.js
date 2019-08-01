//  Import CSS.
import './style.scss'
import './editor.scss'

const { registerBlockType, getBlockDefaultClassName } = wp.blocks
const { InnerBlocks, MediaUpload } = wp.editor

registerBlockType( 'mcw-blocks/slide', {
	title: 'MCW Slide',
	icon: 'sort',
	category: 'layout',
	parent: ['mcw-blocks/slider'],
	attributes: {
		imgUrl: {
			type: 'string',
			default: 'http://fakeimg.pl/600x300/?text=Background Image',
			source: 'attribute',
			selector: '.mcw-slide',
			attribute: 'data-imgurl'
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
			<h5>Slide</h5>
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
		const className = getBlockDefaultClassName('mcw-blocks/slide');
		const { attributes } = props;
		const cNames = `${className} mcw-slide`
		const divstyle= {
			backgroundImage: 'url(' + attributes.imgUrl + ')'
		}

		return (
			<div className={ cNames } data-imgurl={attributes.imgUrl} style={divstyle}>
				<div className='slide-content'>
					<InnerBlocks.Content />
				</div>
			</div>
		)
	},
} )
