function UserTableItem(props) {
  return (
    <tr>
      <th scope="row">{props.user._id}</th>
      <td>{props.user.name}</td>
      <td>{props.user.date}</td>
      <td>{props.user.__v}</td>
    </tr>
  );
}

export default UserTableItem;
