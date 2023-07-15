import {
  FormButton,
  FormField,
  FormGroup,
  FormInput,
  CustomForm,
} from "./style";
import { useNavigate } from "react-router-dom"

const App = ({ fetchData, filters, setFilters }) => {
  const navigate = useNavigate();
  return (
    <>
      <CustomForm style={{ width: "1000px" }}>
        <FormGroup>
          <FormField>
            <FormInput
              type="datetime-local"
              label="Data de início"
              value={filters.startDateTime}
              onChange={(e) => setFilters({ ...filters, startDateTime: e.target.value })}
            />
          </FormField>
          <FormField>
            <FormInput
              type="datetime-local"
              label="Data de Fim"
              value={filters.endDateTime}
              onChange={(e) => setFilters({ ...filters, endDateTime: e.target.value })}
            />
          </FormField>
          <FormField>
            <FormInput
              label="Nome do operador transacionado"
              value={filters.nomeResponsavel}
              onChange={(e) => setFilters({ ...filters, nomeResponsavel: e.target.value })}
            />
          </FormField>
        </FormGroup>
        <FormButton onClick={fetchData} primary fluid>
          Pesquisar
        </FormButton>
        <FormButton onClick={()=>navigate("/")} primary fluid>
          Voltar
        </FormButton>
      </CustomForm>
    </>
  );
};

export default App;
