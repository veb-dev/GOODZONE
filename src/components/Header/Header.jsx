import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import NativeSelect from '@mui/material/NativeSelect';
import './heder.css'
export default function Header() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <header>
            <div className="start_header">
                <div className="flexStrat">
                    <div className="leang">
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small">Lang</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>UzB</MenuItem>
                                <MenuItem value={20}>RuS</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="city_of">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Город
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={30}
                                    inputProps={{
                                        name: 'age',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={10}>Самарканд</option>
                                    <option value={20}>Навои</option>
                                    <option value={30}>Букхара</option>
                                </NativeSelect>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                <div className="mal">
                    <div className="centerUl">
                        <ul><li><a href="2">Магазины</a></li></ul>
                        <ul><li><a href="2">Доставка</a></li></ul>
                        <ul><li><a href="2">Оставить отзыв</a></li></ul>
                    </div>
                    <div className="phone">
                        <a href="1"><i class='bx bx-phone'></i>+998 71 207 03 07</a>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <div className="nav">
                    <div className="logo"><a href="../UzTovar.jsx"><img src="https://goodzone.uz/logo.svg" alt="" /></a></div>
                    <div className="search">
                        <input type="text" placeholder='Поиск по товарам' />
                        <button><i class='bx bx-search'></i></button>
                    </div>
                    <div className="prod_cart">
                        <i class='bx bxs-heart-circle'></i>
                        <i class='bx bxs-bar-chart-alt-2'></i>
                        <i class='bx bx-cart'></i>
                        <i class='bx bx-user'></i>

                    </div>
                </div>
            </div>
            <div className="Promotions">
                <div className="btn-on">
                    <button>Акции и скидки</button>
                </div>
                <div className="ul_Promotions">
                    <ul>
                        <li><a href="2">Смартфоны и гаджеты</a></li>
                        <li><a href="2">Телевизоры и аудио</a></li>
                        <li><a href="2">Техника для кухни</a></li>
                        <li><a href="2">Красота и здоровье</a></li>
                        <li><a href="2">Техника для дома</a></li>
                        <li><a href="2">Ноутбуки и компьютеры</a></li>
                    </ul>

                </div>
            </div>
        </header>
    )
}
