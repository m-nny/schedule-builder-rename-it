import React from 'react';
import {Treebeard} from 'react-treebeard';
import {StyleRoot} from 'radium';
import {getCourseTree} from "../utils/dataHelper";
import styles from "../styles";

const data = getCourseTree();

class NodeViewer extends React.Component {
	render() {
		const style = styles.viewer;
		let json = JSON.stringify(this.props.node, null, 4);

		if (!json) {
			json = "POOP";
		}
		return <div style={style.base}>{json}</div>
	}
}

class CourseTree extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onToggle = this.onToggle.bind(this);
	}

	onToggle(node, toggled) {
		const {cursor} = this.state;
		if (cursor) {
			cursor.active = false;
		}
		node.active = true;
		if (node.children) {
			node.toggled = toggled;
		}
		this.setState({cursor: node});
	}

	render() {
		let {cursor} = this.state;
		console.log(data);
		return (
			<StyleRoot>
				<div style={styles.component}>
					<Treebeard
						data={data}
						onToggle={this.onToggle}
					/>
				</div>
				<div style={styles.component}>
					<NodeViewer node={cursor}/>
				</div>
			</StyleRoot>
		);
	}
}

export default CourseTree;