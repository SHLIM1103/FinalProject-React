/* 제품 추가 모듈 */
import React, { useState, useEffect, Fragment } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const AddPrd = () => {
    const [ctgName, setCtgName] = useState('')
    const [prdName, setPrdName] = useState('')
    const [prdImg, setPrdImg] = useState('')
    const [prdPrice, setPrdPrice] = useState('')
    const [prdInv, setPrdInv] = useState('')

    const { register } = useForm()

    const add = () => {
        axios.post("http://localhost:8080/product/save", {
            ctgName, prdName, prdPrice, prdInv, prdImg
        })
        .then(response => {
            alert(`제품 등록 성공`)
            window.location.reload(false)
        })
        .catch(error => {
            alert(`제품 등록 실패`)
        })
    }

    return (<>
        <Fragment>
            <div className="add-prd">
                <div className="input-new-prd">
                    <form>
                        <div>
                            <h5>제품군: 
                                <select ref={ register } name="ctgName" onChange={ e => {setCtgName(`${ e.target.value }`)}}>
                                    <option value="living">living</option>
                                    <option value="bathroom">bathroom</option>
                                    <option value="kitchen">kitchen</option>
                                    <option value="stationary">stationary</option>
                                </select></h5>
                        </div>
                        <div>
                            <h5>제품명: <input type="text" id="prdName" placeholder="상품명을 입력하세요" onChange={ e => {setPrdName(`${ e.target.value }`)}}/></h5>
                        </div>
                        <div>
                            <h5>판매가격: <input type="text" id="prdPrice" placeholder="판매가격을 입력하세요" onChange={ e => {setPrdPrice(`${ e.target.value }`)}}/></h5>
                        </div>
                        <div>
                            <h5>재고수량: <input type="text" id="prdInv" placeholder="재고수량을 입력하세요" onChange={ e => {setPrdInv(`${ e.target.value }`)}}/></h5>
                        </div>
                        <div>
                            <h5>제품이미지: <input ref={ register } type="file" name="prdImg" onChange={ e => {setPrdImg(`${ e.target.value }`)}} /></h5>
                        </div>
                    </form>
                    <button type="submit" onClick={ add }>제품등록</button>
                </div>
            </div>
        </Fragment>
    </>)
}

export default AddPrd